import "./loginPage.css"
import CardWithForm from "../../components/loginCard/LoginCard"
export function RegPage() {
  const page = "userInfo"
  return (
    <div className="LoginPage">
      <CardWithForm page={page} />
    </div>
  )
}
