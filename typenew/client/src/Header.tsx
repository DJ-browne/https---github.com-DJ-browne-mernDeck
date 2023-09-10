
import './header.css'

export default function Header() {
    return (
        <div className='Header'>
            <div className='container'>
                <div>
                    <div className='logo'>
                        <a href='/'>FlashCard</a>
                    </div>
                </div>

                <div>
                    <div className='menu'>
                        <a href='/'>Decks</a>
                    </div>
                </div>

                <div>
                    <div className='login'>
                        <a href='/login'>Login</a>
                    </div>
                </div>

            </div>
        </div>
    )
}