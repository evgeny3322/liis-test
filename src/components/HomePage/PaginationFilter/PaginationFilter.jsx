import React from 'react'
import {Pagination} from '@mui/material';
import {CARDS_PER_PAGE} from '../../../config'
import {useDispatch, useSelector} from 'react-redux'
import {CHANGE_PAGE} from '../../../redux/contants';

export const PaginationFilter = () => {
    const favs = useSelector(store => store.homepage.favs)
    const quantity = favs.length
    const page = useSelector(store => store.homepage.page)
    const dispatch = useDispatch()
    return (
        <div className='row justify-center'>
            <Pagination
                count={Math.ceil(quantity / CARDS_PER_PAGE)}
                page={page}
                onChange={(_, num) => dispatch({type: CHANGE_PAGE, payload: num})}
                showFirstButton
                showLastButton
                sx={{marginY: 3, marginX: "auto"}}
            />
        </div>
    )
}
