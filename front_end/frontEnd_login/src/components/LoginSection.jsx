import { useState } from 'react'
import './LoginSection.scss'
import { Users } from "@phosphor-icons/react"
import { PopUp } from './PopUp'
import api from '../services/api'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'


export function LoginSection() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
      } = useForm()
    

    const open = () => {
        setIsPopUpOpen(true);
    }

    const closed = () => {
        setIsPopUpOpen(false);
    }

    // //basicamente, estamos guardadando o valor da sua respectiva input dentro de cada uma dessas variáveis (foram substituídas devido ao uso do react-hook-form)
    // const inputName = useRef()
    // const inputEmail = useRef()
    // const inputAge = useRef()

    async function postUsers(data){
        const response = await api.post('/users', {
            name: data.name,
            email: data.email,
            age: data.age
        })

        console.log(data.name)

        if (response.status === 201) {
            toast('Usuário adicionado!')
        }
    }

    const name = watch('name')
    const email = watch('email')
    const age = watch('age')


    const isSubmitDisabled = (!name || !email || !age)

    return (
        <div className="main">
            <button className="button-users">
                <Users onClick={open} color="#3E334E" size={25} />
            </button>

            {isPopUpOpen === true && (
                <PopUp onClose={closed}/>
            )}

            <div className="login-box">
                <div className="login">
                    <div>
                        <h2>Olá, bem-vindo!👋</h2>
                        <p>Insira o nome, e-mail e idade para criar usuário.</p>
                    </div>
                    <form onSubmit={handleSubmit(postUsers)}>
                        <div id="fields">
                            <label htmlFor="">Nome</label>
                            <input type="text" placeholder='Insira seu nome' /*ref={inputName}*/ {...register("name", { required: true })} />
                            
                            <label htmlFor="">E-mail</label>
                            <input type="email" placeholder='Insira seu e-mail' /*ref={inputEmail}*/ {...register("email", { required: true })} />
                            
                            <label htmlFor="">Idade</label>
                            <input type="number" placeholder='Insira sua idade' /*ref={inputAge}*/ {...register("age", { required: true })} />
                            
                        </div>

                        <button disabled={isSubmitDisabled} type='submit'>Criar</button>
                    </form>
                        <Toaster 
                            toastOptions={{
                                position: 'top-center',
                                style: {
                                background: 'green',
                                color: 'white',
                                marginInline: 'auto',
                                },
                            }}
                        />

                </div>
            </div>
        </div>
    )
}