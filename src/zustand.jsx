import { create } from "zustand";
import moment from "moment";

// const accessKey = "IUFSMGKqNNZGzGZxUbHsEgJnQIPq6tcq33QAVqlemPs";

export const storeZustand = create((set) => ({
  cantidadFotos: 4,  // la cantidad de fotos que muestra por vez Unsplash

  currentDate: moment().format('MMMM Do YYYY'),
  busqueda: 'Miami',
  setBusqueda: (valor) => set({ busqueda: valor }),
  infoCurrentPhoto: [],
  setInfoCurrentPhoto: (info) => set({ infoCurrentPhoto: info }),

  infoCategoria: null, // mapean info de categoria
  setInfoCategoria: (value) => set({ infoCategoria: value }), // mapean info de categoria,

  datosPersonales: [], //datos que iran al perfil de la cuenta
  setDatosPersonales: (values) => set({ datosPersonales: values }), //datos que iran al perfil de la cuenta

  imagenesLocalStorage: JSON.parse(localStorage.getItem('imagenes')) || [], // contiene las claves "urls" con sus valores para luego mapearlos
  setImagenesLocalStorage: (url) => set({ imagenesLocalStorage: url }), // contiene las claves "urls" con sus valores para luego mapearlos

  datosPerfil: JSON.parse(localStorage.getItem('dataPersonal')) || [], // almacena datos de usuario
  setDatosPerfil: (data ) => set({ datosPerfil: data }) // almacena datos de usuario
}))