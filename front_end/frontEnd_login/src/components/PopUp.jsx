import { Trash, X } from '@phosphor-icons/react'
import PropTypes from 'prop-types'
import './PopUp.scss'
import api from '../services/api'
import { useEffect, useState } from 'react'

PopUp.propTypes = {
    onClose: PropTypes.func.isRequired,
} 

export function PopUp(props) {

    // //o react "proibe" variáveis de valores variáveis a alterar exibições na tela, por isso esse "users" não consegue exibir os dados após recebê-los
    // let users = []


    const [users, setUsers] = useState([])

    async function getUsers(){
        const usersFromApi = await api.get('/users')

        setUsers(usersFromApi.data)
    }

    //chamando a função getUsers
    //nessa situação, o useEffect está sendo usado para executar tudo que estiver nele assim que a página for renderizada
    useEffect(() => {
        getUsers()
    }, [])


    async function deleteUsers(id){
        await api.delete(`/users/${id}`)

        //para atualizar a tela com os usuários (isso só funciona por causa do useState)
        getUsers()
    }

    return (
        <div className="background-popup">
            <div className="users">
                <div className="button-box">
                    <button className="button-popup" onClick={props.onClose}>
                        <X size={21} />
                    </button>
                </div>

                <div className="user">
                    { users.map((user) => (
                        <div className="user-tag" key={user.id}>
                            <div className="data">
                                <p>Nome: <span>{user.name}</span></p>
                                <p>Email: <span>{user.email}</span></p>
                                <p>Idade: <span>{user.age} anos</span></p>
                            </div>
                            {/* transforma em arrow function porque, se passar normal, o react trava */}
                            <button onClick={() => deleteUsers(user.id)} className="delete-user"><Trash size={18} /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}