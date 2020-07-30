import React from 'react'
import PageDefault from '../../../components/PageDefault'
import '../../../styles/config/reset.css'
import { Link } from 'react-router-dom'

function cadastroVideo() {
    return (
        <PageDefault>
            <h1>Cadastro Video</h1>
            <br/>
            <Link to='./categoria' >Cadastro Categoria</Link>
        </PageDefault>
    )
}

export default cadastroVideo