import Button from '@material-ui/core/Button';
import Header from '../components/Header';

export default function About() {
    return (
        <div>
            <Header/>
            <p>About Page</p>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    )
}