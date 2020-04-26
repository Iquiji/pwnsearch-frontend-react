import { useRouter } from 'next/router'
import "isomorphic-fetch"
import WebsiteListItem from '../components/WebsiteListItem';
import SearchForm from "../components/SearchForm"

export default function Home(props) {
    const data = JSON.parse(props.data);
    //console.log(data);
	return (
        <div style={{
			"padding-left": "15px"
		}}>
            <script src="https://kit.fontawesome.com/865656ea9b.js" crossOrigin="anonymous"></script>
            <h1>PwnSearch! by Iquiji</h1>
            <SearchForm/>
            {data.res.map((website,i) => {
                    return <WebsiteListItem hostname={website.hostname} text={website.text} added={formatDate(website.added)} key={i} popularity={website.popularity}/>;
                })}
        </div>
  	)
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const { s } = context.query;
    console.log(`${context.req.connection.remoteAddress} searched ${s}`);
    let api_res = await fetch("http://failhack.com:8000/search", {
            method: "POST",
            mode: "cors", // no-cors, cors, *same-origin
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"searchTerm":s}),
        });

    const api_data = await api_res.json();
    // Pass data to the page via props
    //console.log(api_data);
    return { props: { data : api_data } }
}

function formatDate(date){
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
    const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(new Date(date));

    return `${da}-${mo}-${ye}`;
}