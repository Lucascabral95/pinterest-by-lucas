import { create } from "zustand";
import moment from "moment";

// const accessKey = "IUFSMGKqNNZGzGZxUbHsEgJnQIPq6tcq33QAVqlemPs";

export const storeZustand = create((set) => ({
  cantidadFotos: 4,  // la cantidad de fotos que muestra por vez Unsplash
  cantidadColumnas: 4,

  currentDate: moment().format('MMMM Do YYYY'),
  busqueda: 'Animales',
  setBusqueda: (valor) => set({ busqueda: valor }),

  infoCurrentPhoto: [], // codigo viejo (original)
  setInfoCurrentPhoto: (info) => set({ infoCurrentPhoto: info }), // codigo viejo (original)
  infoCurrentPhoto2: JSON.parse(localStorage.getItem("imagenSeleccionada")) || [], // contiene en localStorage toda la informacion de la imagen que se selecciono en la ruta raiz
  setInfoCurrentPhoto2: (info) => set({ infoCurrentPhoto2: info }), // contiene en localStorage toda la informacion de la imagen que se selecciono en la ruta raiz

  infoCategoria: null, // mapean info de categoria
  setInfoCategoria: (value) => set({ infoCategoria: value }), // mapean info de categoria,

  datosPersonales: [], //datos que iran al perfil de la cuenta
  setDatosPersonales: (values) => set({ datosPersonales: values }), //datos que iran al perfil de la cuenta

  imagenesLocalStorage: JSON.parse(localStorage.getItem('imagenes')) || [], // contiene las claves "urls" con sus valores para luego mapearlos
  setImagenesLocalStorage: (url) => set({ imagenesLocalStorage: url }), // contiene las claves "urls" con sus valores para luego mapearlos

  datosPerfil: JSON.parse(localStorage.getItem('dataPersonal')) || [], // almacena datos de usuario
  setDatosPerfil: (data) => set({ datosPerfil: data }) // almacena datos de usuario
}))