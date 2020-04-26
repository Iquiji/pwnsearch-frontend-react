import Head from 'next/head'
import { withRouter } from 'next/router'
import { Form,Button } from 'react-bootstrap';
import SearchForm from "../components/SearchForm"

export default function Home() {
	return (
		<>
			<script src="https://kit.fontawesome.com/865656ea9b.js" crossOrigin="anonymous"></script>
			<h1>
				PwnSearch! by Iquiji
			</h1>
			<SearchForm></SearchForm>
			<b></b>
			<p></p>
		</>
  	)
}