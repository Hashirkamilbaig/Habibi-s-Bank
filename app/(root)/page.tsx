import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const logIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user= {logIn?.name || "Habibi"}
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