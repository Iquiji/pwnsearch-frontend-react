import Head from 'next/head'
import { withRouter } from 'next/router'
import { Form,Button } from 'react-bootstrap';
import SearchForm from "../components/SearchForm"

export default function Home() {
	return (
		<div style={{
			"padding-left": "15px"
		}}>
			<script src="https://kit.fontawesome.com/865656ea9b.js" crossOrigin="anonymous"></script>
			<h1>
				PwnSearch! by Iquiji
			</h1>
			<SearchForm></SearchForm>
			<b></b>
			<p></p>
		</div>
  	)
}