import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <p>About Page</p>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </Layout>
    )
}