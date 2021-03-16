import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Excel parser</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Upload excel</h1>
      <div>
        <form
          ref="uploadForm"
          id="uploadForm"
          action="http://localhost:3001/upload"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="sampleFile" />
          <input type="submit" value="Upload!" />
        </form>
      </div>
    </Layout>
  );
}
