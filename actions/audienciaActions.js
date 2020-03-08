export const setAudiencia = id => (dispatch, getState) => {
    dispatch({ type:'audiencia/SET_AUDIENCIA', payload: getState().audiencia.audiencias[id-1] })
}

export const setInteressado = pessoa => (dispatch) => {
    dispatch({ type: 'audiencia/SET_INTERESSADO', payload: pessoa})
}

export const enviarAta = ataReuniao => dispatch => {
    
}