/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react"

function useapi() {
  const [detail, setdetail] = useState(null)

  function getdetails() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => setdetail(res.results[0]))
  }

  return { detail, getdetails }
}

export default useapi