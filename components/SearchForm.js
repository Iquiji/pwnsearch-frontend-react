import styles from './SearchForm.module.css'
import { Form,Button,Badge, Col } from 'react-bootstrap';

export default class SearchForm extends React.Component {
	render() {
		return <Form action="/searched">
			<Form.Row>
				<Col>
					<Form.Control size="sm" as="input" placeholder="Searchterm..." name="s"/>
				</Col>
				<Col>
					<Button type="submit" variant='primary' size='sm'>
						<i class="fas fa-search"></i>
					</Button>
				</Col>
			</Form.Row>
		</Form>;
	}
}