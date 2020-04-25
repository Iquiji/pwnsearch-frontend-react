import Head from 'next/head'
import { withRouter } from 'next/router'

export default function Home() {
	return (
		<>
			<h1>
				PwnSearch! by Iquiji
			</h1>
			<SearchForm></SearchForm>
			<b></b>
			<p></p>
		</>
  	)
}

class SearchForm extends React.Component {
	render() {
		return <form action="/searched">
			<input type="text" name="s" />
			<input type="submit" value="Submit" />
		</form>;
	}
}