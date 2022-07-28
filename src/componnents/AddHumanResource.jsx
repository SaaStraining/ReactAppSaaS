import React from 'react'
import IllustRh from '../assets/illustrations/illustration_rh.png'
import './components.css'

function AddHumanResource() {
  return (
    <div className='AddHumanResource block '>
        <div className='bg-second w-4/5 h-56 rounded-2xl flex m-auto mt-8 '>
            <div className='block pt-6 pl-16 pr-8 w-7/12 text-left'>
                <h1 className='font-bold mb-3 mt-5 ml-2'>Ajout des Employés</h1>
                <p className='text-sm font-light'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla.</p>
            </div>
            <div className='w-5/12'><img src={IllustRh} alt="" /></div>
        </div>
        <div className='m-auto w-4/6 mt-11 '>
            <form action="">
                <div className='flex justify-center'>
                    <input type="radio" className='mr-4' name="aa" id="" /><label className='mr-12'>Dr</label>
                    <input type="radio" className='mr-4' name="aa" id="" /><label className='mr-12'>Sp</label>
                    <input type="radio" className='mr-4' name="aa" id="" /><label className='mr-12'>Co</label>
                    <input type="radio" className='mr-4' name="aa" id="" /><label className='mr-12'>T1</label>
                    <input type="radio" className='mr-4' name="aa" id="" /><label className='mr-12'>T2</label>
                    <input type="radio" className='mr-4' name="aa" id="" /><label className=''>Ch</label>
                </div>
                <div className=' content-center w-full text-left text-xs mt-7 '>
                    <table className='w-full justify-center'>
                        <tr className='h-10'>
                            <td><p className='w-24'>Nom :</p></td><td><input type="text" className='bg-input w-52 h-7 border-none rounded-lg'/><br /></td>
                            <td><p className='w-24 ml-10'>Prenom :</p></td><td><input type="text" className='bg-input w-52 h-7 border-none rounded-lg'/><br /></td>
                        </tr>
                        <tr className='h-10'>
                            <td>Cin :</td><td><input type="text" className='bg-input w-52 h-7 border-none rounded-lg'/><br /></td>
                            <td><p className='w-24 ml-10'>Téléphone :</p></td><td><input type="text" className='bg-input w-52 h-7 border-none rounded-lg'/><br /></td>
                        </tr>
                        <tr className='h-10'>
                            <td>Mail :</td><td colspan="3"><input type="text" className='bg-input w-11/12 h-7 border-none rounded-lg'/><br /></td>
                        </tr>
                        <tr className='h-10'>
                            <td>Addresse :</td><td colspan="3"><input type="text" className='bg-input w-11/12 h-7 border-none rounded-lg'/><br /></td>
                        </tr>
                        <tr className='h-10'>
                            <td>Salaire Brut :</td><td><input type="text" className='bg-input w-52 h-7 border-none rounded-lg'/><br /></td>
                            <td><p className='w-24 ml-10'>Charge Sociale :</p></td><td><input type="text" className='bg-input w-52 h-7 border-none rounded-lg'/><br /></td>
                        </tr>
                        <tr className='h-10'>
                            <td>Salaire Net :</td><td><input type="text" className='bg-input w-52 h-7 border-none rounded-lg'/><br /></td>
                        </tr>
                    </table>
                </div>
                <button type="submit" className='bg-primary text-white w-36 h-8 rounded-lg text-xs shadow-lg shadow-shadow mt-3 float-right mr-24'>Ajouter</button>
            </form>
        </div>
    </div>
  )
}

export default AddHumanResource