import glasses1 from '../../Assets/Oculos BlindVision 1.svg'
import glasses2 from '../../Assets/Oculos BlindVision 2 1.svg'
import ondinhas from '../../Assets/Vector.svg'
import { Area, Container, Titles, Text } from './style';

export function Page2() {


    return(
        <>
            <Container>

                <Area>
                    <img src={ glasses1 } alt="Glasses 1" />

                    <div className="content first">
                        <Titles>Title</Titles>
                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatum magni! Saepe deserunt esse eum ipsa officia illo libero facere ullam sunt doloremque, molestiae itaque quas molestias. Necessitatibus, provident vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde, ex doloremque nesciunt fugiat dolor, aliquam voluptatum totam deserunt neque corporis architecto natus veritatis vitae, iusto illo reprehenderit.</Text>
                        <img className='ondas' src={ ondinhas } alt="Ondinhas" />
                    </div>
                </Area>

                <Area>
                    <div className='content second'>
                        <Titles>Title</Titles>
                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatum magni! Saepe deserunt esse eum ipsa officia illo libero facere ullam sunt doloremque, molestiae itaque quas molestias. Necessitatibus, provident vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde, ex doloremque nesciunt fugiat dolor, aliquam voluptatum totam deserunt neque corporis architecto natus veritatis vitae, iusto illo reprehenderit. </Text>
                        <img className='ondas' src={ ondinhas } alt="Ondinhas" />
                    </div>

                    <img src={ glasses2 } alt="Glasses 1" />

                </Area>

            </Container>
        </>
    );
}