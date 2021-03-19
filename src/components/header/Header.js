import React from 'react'

function Header() {
    return (
        <div className='header'>
            <nav>
                <ul className='float'>
                    <li>피드</li>
                    <li>레전드</li>
                    <li><span className='logout'>로그아웃</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
