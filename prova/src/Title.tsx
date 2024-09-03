import './Title.css'

interface TitleProps {
    text?: string;
    classColor?: 'text-yellow' | 'text-violet';
}

function Title(props: TitleProps) {

    return <h1 className={props.classColor}>{ props.text }</h1>;
}

export default Title;