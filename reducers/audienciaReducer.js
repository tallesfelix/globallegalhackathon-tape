import { AccordionTitle } from "semantic-ui-react"

const initialState = {
    audiencias: [{
        id:1,
        entidade: 'Semace',
        entidade_foto: '/semace.jpg',
        titulo: 'Audiencia pública - Viaduto Cócó',
        motivacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        categoria: 'Meio-Ambiente',
        data: 'sexta-feira, 13 de março de 2020, 08:00',
        local: 'Fórum, Rua exemplo 123',
        horario:'08:00',
        objetivos:['Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'],
        pautas:['Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'],
        convidados:['Semace', 'Ibama'],
        interessados:[{
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        }],
        status: 'passada'
    },
    {
        id:2,
        entidade: 'Ibama',
        entidade_foto: '/ibama.png',
        titulo: 'Audiencia pública - Parque cócó',
        motivacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        categoria: 'Meio-Ambiente',
        data: 'sexta-feira, 13 de março de 2020, 08:00',
        local: 'Fórum, Rua exemplo 123',
        horario:'08:00',
        objetivos:['Objetivo 1', 'Objetivo 2'],
        pautas:['Pauta 1', 'Pauta 2'],
        convidados:['Semace', 'Ibama'],
        interessados:[{
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        }],
        status: 'passada'
    },
    {
        id:3,
        entidade: 'Semace',
        entidade_foto: '/semace.jpg',
        titulo: 'Audiencia pública - Praia Sabiaguaba',
        motivacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        categoria: 'Meio-Ambiente',
        data: 'sexta-feira, 13 de março de 2020, 08:00',
        local: 'Fórum, Rua exemplo 123',
        horario:'08:00',
        objetivos:['Objetivo 1', 'Objetivo 2'],
        pautas:['Pauta 1', 'Pauta 2'],
        convidados:['Semace', 'Ibama'],
        interessados:[{
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        }],
        status: 'futura'
    },
    {
        id:4,
        entidade: 'Ibama',
        entidade_foto: '/ibama.png',
        titulo: 'Audiencia pública - Viaduto Cócó',
        motivacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        categoria: 'Meio-Ambiente',
        data: 'sexta-feira, 13 de março de 2020, 08:00',
        local: 'Fórum, Rua exemplo 123',
        horario:'08:00',
        objetivos:['Objetivo 1', 'Objetivo 2'],
        pautas:['Pauta 1', 'Pauta 2'],
        convidados:['Semace', 'Ibama'],
        interessados:[{
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        }],
        status: 'passada'
    },
    {
        id:5,
        entidade: 'Ibama',
        entidade_foto: '/ibama.png',
        titulo: 'Audiencia pública - Praia do Futuro',
        motivacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        categoria: 'Meio-Ambiente',
        data: 'sexta-feira, 13 de março de 2020, 08:00',
        local: 'Fórum, Rua exemplo 123',
        horario:'08:00',
        objetivos:['Objetivo 1', 'Objetivo 2'],
        pautas:['Pauta 1', 'Pauta 2'],
        convidados:['Semace', 'Ibama'],
        interessados:[{
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        }],
        status: 'passada'
    },
    {
        id:6,
        entidade: 'Universidade Federal do Ceará',
        entidade_foto: '/ufc.png',
        titulo: 'Audiencia pública - Concessão de Bolsas',
        motivacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        categoria: 'Meio-Ambiente',
        data: 'sexta-feira, 13 de março de 2020, 08:00',
        local: 'Fórum, Rua exemplo 123',
        horario:'08:00',
        objetivos:['Objetivo 1', 'Objetivo 2'],
        pautas:['Pauta 1', 'Pauta 2'],
        convidados:['Semace', 'Ibama'],
        interessados:[{
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        },
        {
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        }],
        status: 'futura'
    },
    {
        id:7,
        entidade: 'Semace',
        entidade_foto: '/semace.jpg',
        titulo: 'Audiencia pública- Praia do Futuro',
        motivacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        categoria: 'Meio-Ambiente',
        data: 'sexta-feira, 13 de março de 2020, 08:00',
        local: 'Fórum, Rua exemplo 123',
        horario:'08:00',
        objetivos:['Objetivo 1', 'Objetivo 2'],
        pautas:['Pauta 1', 'Pauta 2'],
        convidados:['Semace', 'Ibama'],
        interessados:[{
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        },
        {
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        },
        {
            nome: 'Talles Felix',
            email:'talles@email.com',
            telefone: '9999999999'
        },],
        status: 'futura'
    }

    ],
    audiencia: null
}

export default function (state = initialState, action) {
    switch(action.type){
        case 'audiencia/SET_AUDIENCIA':
            return {
                ...state,
                audiencia: action.payload
            }
        // case 'audiencia/SET_INTERESSADO':
        //     return {
        //         ...state,
        //         audiencias[action.payload.audId - 1]: [...audiencias, audiencias[action.payload.audId - 1].]
        //     }/
        default:
            return state
    }
}