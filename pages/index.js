import Head from 'next/head'
import { withRouter } from 'next/router'
import { Form } from 'react-bootstrap';

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
		return <Form action="/searched">
			<Form.Row>
				<Form.Control as="input"/>
			</Form.Row>
		</Form>;
	}
}