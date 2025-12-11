import React from 'react'

export const Card = ({foto}) => {
  return (
    <div className="card">
      <img
        src={foto.src.medium}
        alt={foto.alt}y
        className="foto-galeria"
      />
      <p>Autor: {foto.photographer}</p>
      <p>Descripción: {foto.alt}</p>
      <a href={foto.src.medium}>Foto en Pexels</a>
    </div>
  );
}
