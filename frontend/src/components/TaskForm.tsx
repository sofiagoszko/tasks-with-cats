import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Task } from "../Types";
import Swal from "sweetalert2";

export default function TaskForm(){
  type Errors = {
    title?: string;
    description?: string;
  };


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("No se encontró la tarea buscada");
          return res.json();
        })
        .then((task: Task) => {
          setTitle(task.title);
          setDescription(task.description);
        })
        .catch((err) => console.error("ERROR ", err));
    }
  }, [id]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try{
      const method = id ? "PUT" : "POST";
      const url = id
        ? `${import.meta.env.VITE_API_URL}/tasks/${id}`
        : `${import.meta.env.VITE_API_URL}/tasks`;

      const response = await fetch(url,{
        method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, description}),
      });

      if(!response.ok){
        const data = await response.json();
        setErrors(data.errors || {});
      }else{
        const message = id
          ? "La tarea fue actualizada correctamente"
          : "La nueva tarea fue creada correctamente";
        Swal.fire(
          "¡Éxito!",
          message,
          "success"
        ).then(() => {
          navigate("/tasks")
        });
      }
    }catch (err){
      console.error("ERROR ", err);
    }
  };

    const title_page = () => {
      if(id){
          return <h2 className='text-center'>Actualizar Tarea</h2>
      }else{
          return <h2 className='text-center'>Nueva Tarea</h2>
      }
    }

  return (
      <div className="container mt-5">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div className="card shadow-sm p-4">
              <div className="card-body">
                <h1>{title_page()}</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title">
                      Titulo <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" id="title" placeholder="Ingresa el título de la tarea" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description">
                      Descripción <span className="text-danger">*</span>
                    </label>
                    <textarea className="form-control" placeholder="Ingresa la descripción de la tarea" id="floatingTextarea" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
                  </div>

                  <div className="d-flex justify-content-evenly mt-3">
                    <Link to="/tasks" className="btn btn-danger">
                      Cancelar
                    </Link>
                    <button type="submit" className="btn btn-success">
                      Aceptar
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
  );
};