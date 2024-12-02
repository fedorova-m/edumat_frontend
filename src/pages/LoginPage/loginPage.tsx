import "./loginPage.css"
import CardWithForm from "../../components/loginCard/LoginCard"
export function LoginPage() {
  const page = "login"
  return (
    <div className="LoginPage">
      <CardWithForm page={page} />
    </div>
  )
}
