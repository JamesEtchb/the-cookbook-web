import bcrypt from 'bcryptjs'

const salt = '$2b$10$GZb4nxa5BOkMD0hJ6thgNU'

export default function Login() {
  const handleLogin = ({ email, password }) => {
    const hash = bcrypt.hashSync(password, salt)
    fetch('https://the-cookbook-api.web.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password: hash }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
          return
        }
        localStorage.setItem('token', data.token)
        setToken(data.token)
      })
      .catch(err => console.log(err))
  }
}
