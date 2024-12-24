import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const logIn = {firstName: "Habibi", lastName: "Baig", email: "hashirkamilbaig2003@gmail.com"}

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

        RecentTransactions
      </div>
      <RightSidebar
        user={logIn}
        transactions = {[]}
        banks = {[{currentBalance: 123.50},{ currentBalance: 1500.5 }]}
      />
    </section>
  )
}

export default Home