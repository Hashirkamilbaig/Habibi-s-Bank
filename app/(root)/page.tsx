import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const logIn = {firstName: "Habibi"}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user= {logIn?.firstName || "Habibi"}
            subtext= "Access and manage your account and transactions efficently "
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home