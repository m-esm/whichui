import { Input } from "antd";
import React from 'react'

function AntInput() {
  return (
    <div>
      <Input size="large" placeholder="large size"  />
      <br />
      <br />
      <Input placeholder="default size" />
      <br />
      <br />
      <Input size="small" placeholder="small size"  />
    </div>
  )
}

export default AntInput