import React from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Potato = styled.span`
  display: flex;
  width: 4rem;
  height: 4rem;
  background: purple;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AnimatePresence>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Hi potatos
      </motion.h1>
    </AnimatePresence>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Potato />
  </Layout>
)

export default IndexPage
