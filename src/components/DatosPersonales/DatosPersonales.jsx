// // import "./datosPersonales.scss"
// import "./DatosPersonales.scss"
// import { useForm } from "react-hook-form"
// import { storeZustand } from "../../zustand.jsx";

// export default function DatosPersonales() {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors }
//     } = useForm();
//     const { datosPerfil, setDatosPerfil } = storeZustand()

//     const onsubmit = (data) => {
//         const datos = {
//             link: data.link,
//             nombre: data.nombre,
//             apellido: data.apellido,
//             informacion: data.informacion,
//             pronombres: data.pronombres,
//             website: data.website,
//             userName: data.userName,
//         };
//         let datosParseados = JSON.parse(localStorage.getItem("dataPersonal")) || {};
//         datosParseados = { ...datosParseados, ...datos };
//         localStorage.setItem("dataPersonal", JSON.stringify(datosParseados));
//         const imagenesString = JSON.stringify(data || {});
//         localStorage.setItem("dataPersonal", imagenesString);
//         setDatosPerfil(datosParseados);
//         reset();
//         console.log(datosParseados);
//     };

//     return (
//         <div className="datos-personales">

//             <div className="formulario">
//                 <h3>Editar perfil</h3>
//                 <p> Mantén privados tus datos personales. Cualquier usuario que pueda ver tu perfil podrá ver la información que agregues aquí. </p>
//                 <form onSubmit={handleSubmit(onsubmit)} className="form-hook">
//                     <div className="contenedor-img">
//                         <div className="img-img">
//                             <p> Foto </p>
//                             <img src={datosPerfil.link} alt="Foto de perfil" />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="link">Link de tu foto de perfil</label>
//                             <input
//                                 type="text"
//                                 name="link" className="form-control"
//                                 placeholder={datosPerfil.link}
//                                 {...register("link", {
//                                     required: true
//                                 })} />
//                         </div>
//                     </div>
//                     <div className="form-group fullname">
//                         <label htmlFor="nombre">Nombre(s):</label>
//                         <input
//                             placeholder={datosPerfil.nombre}
//                             type="text"
//                             name="nombre" className="form-control"
//                             {...register("nombre", { required: true })} />
//                         <label htmlFor="apellido">Apellido(s)</label>
//                         <input
//                             placeholder={datosPerfil.apellido}
//                             type="text"
//                             name="apellido" className="form-control"
//                             {...register("apellido", { required: true })} />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="informacion">Informacion</label>
//                         <textarea
//                             placeholder={datosPerfil.informacion}
//                             type="text"
//                             name="Informacion" className="form-control"
//                             {...register("informacion", { required: true })} />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="pronombres">Pronombres: </label>
//                         <select
//                             className="form-select"
//                             aria-label="Default select example"
//                             {...register('pronombres', { required: true })}
//                         >
//                             <option placeholder={datosPerfil.pronombres} disabled selected >
//                                 Agrega tus pronombres
//                             </option>
//                             <option value="Ell@/l@/-@">Ell@/l@/-@</option>
//                             <option value="Ella/le/-a">Ella/le/-a</option>
//                             <option value="Ellx/lx-x">Ellx/lx-x</option>
//                             <option value="El/el/-o">El/el/-o</option>
//                         </select>
//                     </div>
//                     <p className="texto"> Elige hasta 2 grupos de pronombres para que aparezcan en tu perfil y la personas sepan cómo referirse a ti. Puedes editarlos o eliminarlos cuando quieras. </p>

//                     <div className="form-group">
//                         <label htmlFor="website">Website:</label>
//                         <input
//                             placeholder={datosPerfil.website}
//                             type="text"
//                             name="sitioWeb" className="form-control"
//                             {...register("website", { required: true })} />
//                         <p className="texto"> www.pinterest.com/lucasgamerpolar10 </p>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="userName">Nombre de usuario:</label>
//                         <input
//                             placeholder={datosPerfil.userName}
//                             type="text"
//                             name="userName" className="form-control"
//                             {...register("userName", {
//                                 required: true, minLength: 3,
//                             })} />
//                         {errors.userName && <span style={{ color: "red" }}> Minimo 3 caracteres </span>}
//                     </div>
//                     <div className="shadow p-3 mb-5 bg-body-tertiary rounded form-group contenedor-botones mt-2">
//                         <div className="botones">
//                             <input className="btn btn-secondary secondary" value="Restablecer" />
//                             <input type="submit" className="btn btn-danger danger" value="Guardar" />
//                         </div>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }
// import "./datosPersonales.scss"

import "./DatosPersonales.scss"
import { useForm } from "react-hook-form"
import { storeZustand } from "../../zustand.jsx";

export default function DatosPersonales() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { datosPerfil, setDatosPerfil } = storeZustand()

    const onsubmit = (data) => {
        const datos = {
            link: data.link,
            nombre: data.nombre,
            apellido: data.apellido,
            informacion: data.informacion,
            pronombres: data.pronombres,
            website: data.website || "No registra",
            userName: data.userName,
            edad: data.edad,
            pais: data.pais,
            provincia: data.provincia,
            partido: data.partido,
            localidad: data.localidad,
            calle: data.calle,
            altura: data.altura,
            celular: data.celular,
            telefono: data.telefono || "No registra",
            postal: data.postal,
            email: data.email,
        };
        let datosParseados = JSON.parse(localStorage.getItem("dataPersonal")) || {};
        datosParseados = { ...datosParseados, ...datos };
        localStorage.setItem("dataPersonal", JSON.stringify(datosParseados));
        const imagenesString = JSON.stringify(data || {});
        localStorage.setItem("dataPersonal", imagenesString);
        setDatosPerfil(datosParseados);
        reset();
        console.log(datosParseados);
    };

    return (
        <div className="datos-personales">

            <div className="formulario">
                <h3>Editar perfil</h3>
                <p> Mantén privados tus datos personales. Cualquier usuario que pueda ver tu perfil podrá ver la información que agregues aquí. </p>
                <form onSubmit={handleSubmit(onsubmit)} className="form-hook">
                    <div className="contenedor-img">
                        <div className="img-img">
                            <p> Foto </p>
                            <img src={datosPerfil.link} alt="Foto de perfil" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="link">Link de tu foto de perfil</label>
                            <input
                                type="text"
                                name="link" className="form-control"
                                placeholder={datosPerfil.link}
                                {...register("link", {
                                    required: true
                                })} />
                        </div>
                    </div>
                    <div className="form-group fullname">
                        <label htmlFor="nombre">Nombre(s):</label>
                        <input
                            placeholder={datosPerfil.nombre}
                            type="text"
                            name="nombre" className="form-control"
                            {...register("nombre", { required: true })} />
                        <label htmlFor="apellido">Apellido(s)</label>
                        <input
                            placeholder={datosPerfil.apellido}
                            type="text"
                            name="apellido" className="form-control"
                            {...register("apellido", { required: true })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="informacion">Informacion</label>
                        <textarea
                            placeholder={datosPerfil.informacion}
                            type="text"
                            name="Informacion" className="form-control"
                            {...register("informacion", { required: true })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edad">Edad:</label>
                        <input
                            placeholder={datosPerfil.edad}
                            type="number"
                            name="edad" className="form-control"
                            {...register("edad", { required: true })} />
                        <p className="texto"> www.pinterest.com/lucasgamerpolar10 </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pronombres">Pronombres: </label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register('pronombres', { required: true })}
                        >
                            <option placeholder={datosPerfil.pronombres} disabled selected >
                                Agrega tus pronombres
                            </option>
                            <option value="Ell@/l@/-@">Ell@/l@/-@</option>
                            <option value="Ella/le/-a">Ella/le/-a</option>
                            <option value="Ellx/lx-x">Ellx/lx-x</option>
                            <option value="El/el/-o">El/el/-o</option>
                        </select>
                    </div>
                    <p className="texto"> Elige hasta 2 grupos de pronombres para que aparezcan en tu perfil y la personas sepan cómo referirse a ti. Puedes editarlos o eliminarlos cuando quieras. </p>

                    <div className="form-group">
                        <label htmlFor="website">Website:</label>
                        <input
                            placeholder={datosPerfil.website}
                            type="text"
                            name="sitioWeb" className="form-control"
                            {...register("website")} />
                        <p className="texto"> www.pinterest.com/lucasgamerpolar10 </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">Nombre de usuario:</label>
                        <input
                            placeholder={datosPerfil.userName}
                            type="text"
                            name="userName" className="form-control"
                            {...register("userName", {
                                required: true, minLength: 3,
                            })} />
                        {errors.userName && <span style={{ color: "red" }}> Minimo 3 caracteres </span>}
                    </div>
                    <div className="form-group fullname">
                        <label htmlFor="provincia">Pais:</label>
                        <input
                            placeholder={datosPerfil.pais}
                            type="text"
                            name="pais" className="form-control"
                            {...register("pais", { required: true })} />
                        <label htmlFor="provincia">Provincia:</label>
                        <input
                            placeholder={datosPerfil.provincia}
                            type="text"
                            name="provincia" className="form-control"
                            {...register("provincia", { required: true })} />
                    </div>
                    <div className="form-group fullname">
                        <label htmlFor="partido">Partido:</label>
                        <input
                            placeholder={datosPerfil.partido}
                            type="text"
                            name="partido" className="form-control"
                            {...register("partido", { required: true })} />
                        <label htmlFor="localidad">Localidad:</label>
                        <input
                            placeholder={datosPerfil.localidad}
                            type="text"
                            name="localidad" className="form-control"
                            {...register("localidad", { required: true })} />
                    </div>
                    <div className="form-group fullname">
                        <label htmlFor="calle">Calle:</label>
                        <input
                            placeholder={datosPerfil.calle}
                            type="text"
                            name="calle" className="form-control"
                            {...register("calle", { required: true })} />
                        <label htmlFor="altura">Altura:</label>
                        <input
                            placeholder={datosPerfil.altura}
                            type="number"
                            name="altura" className="form-control"
                            {...register("altura", { required: true })} />
                    </div>
                    <div className="form-group fullname">
                        <label htmlFor="celular">Numero de Celular:</label>
                        <input
                            placeholder={datosPerfil.celular}
                            type="number"
                            name="celular" className="form-control"
                            {...register("celular", { required: true })} />
                        <p className="texto"> *Sin espacios, ni signos* </p>
                        <label htmlFor="telefono">Numero de Telefono:</label>
                        <input
                            placeholder={datosPerfil.telefono}
                            type="number"
                            name="telefono" className="form-control"
                            {...register("telefono")} />
                        <p className="texto"> *Sin espacios, ni signos* </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postal">Codigo postal:</label>
                        <input
                            placeholder={datosPerfil.postal}
                            type="number"
                            name="postal" className="form-control"
                            {...register("postal", { required: true })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            placeholder={datosPerfil.email}
                            type="email"
                            name="email" className="form-control"
                            {...register("email", { required: true })} />
                    </div>
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded form-group contenedor-botones mt-2">
                        <div className="botones">
                            <input className="btn btn-secondary secondary" value="Restablecer" />
                            <input type="submit" className="btn btn-danger danger" value="Guardar" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
