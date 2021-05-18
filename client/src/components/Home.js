import React from 'react'
import LeftPanel from './home/LeftPanel'
import LeftPanelNewChat from './home/LeftPanelNewChat'
import RightPanel from './home/RightPanel'

export default function Home() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-4 mh border">
          {/* <LeftPanel /> */}
          <LeftPanelNewChat />
        </div>
        <div className="col-8 mh">
          <RightPanel />
        </div>
      </div>
    </div>
  )
}
