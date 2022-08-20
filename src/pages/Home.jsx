import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import FILE1 from "../components/files/file1"
import FILE2 from "../components/files/file2"
import FILE3 from "../components/files/file3"
import FILE4 from "../components/files/file4"
import FILE5 from "../components/files/file5"
import FILE6 from "../components/files/file6"
import FILE7 from "../components/files/file7"
import FILE8 from "../components/files/file8"
import FILE9 from "../components/files/file9"
import FILE10 from "../components/files/file10"

const Container = styled.div``
const Table = styled.table`
  margin: -50px;
  padding: 0;
`
const Tr = styled.tr``
const Th = styled.th``
const Td = styled.td``
const Home = () => {
  return (
    <Container>
      <Table border={1}>
        <Tr>
          <Th>ID voice</Th>
          <Th>ID Agent</Th>
          <Th>Agent name</Th>
          <Th>ID Customer</Th>
          <Th>Customer name</Th>
          <Th>date</Th>
          <Th>call hold duration</Th>
          <Th>call duration</Th>
        </Tr>
        {FILE1.map((item) => (
          <Tr key={item.audioID}>
            <Td>
              <Link to={`audioID=${item.audioID}`}>{item.audioID}</Link>
            </Td>
            <Td>{item.audioCredit.agent.agentID}</Td>
            <Td>{item.audioCredit.agent.name}</Td>
            <Td>{item.audioCredit.customer.customerID}</Td>
            <Td>{item.audioCredit.customer.name}</Td>
            <Td>{item.audioCredit.date}</Td>
            <Td>{item.audioCredit.callHoldDration}</Td>
            <Td>{item.audioCredit.callDuration}</Td>
          </Tr>
        ))}
      </Table>
    </Container>
  )
}

export default Home
