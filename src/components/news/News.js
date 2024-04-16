import "./news.sass"

export default function News() {
  return (
    <div className='news'>
        <div className='news__text'>
            <p>Новостная рассылка</p>
            <form>
                <input type='email' placeholder='ваш@email.com'/>
                <button type='submit'>Подписаться</button>
            </form>
        </div>
    </div>
  )
}
