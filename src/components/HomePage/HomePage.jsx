import React from 'react'
import {Fav} from './Fav/Fav'
import {Filter} from './Filter/Filter'
import {Header} from './Header/Header'
import {Main} from './Main/Main'
import {PaginationFilter} from './PaginationFilter/PaginationFilter'

export const HomePage = () => {
    return (
        <div className='HomePage'>
            <Header></Header>
            <div className="HomePage__grid container">
                <div className="HomePage__filter HomePage__block">
                    <Filter/>
                </div>
                <div className="HomePage__main HomePage__block">
                    <Main/>
                </div>
                <div className="HomePage__fav HomePage__block">
                    <Fav></Fav>
                    <PaginationFilter/>
                </div>
            </div>
        </div>
    )
}
