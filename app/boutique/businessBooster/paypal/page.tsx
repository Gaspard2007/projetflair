import Next, { NextPage } from 'next'
import Link from 'next/link'


const Paypal:NextPage = () => {
  return (
    <div>
      <h1>Portail Stripe</h1>
      <Link href={'/boutique/businessBooster/validation'}><button>Etape validation</button></Link>
    </div>
  )
}



export default Paypal
