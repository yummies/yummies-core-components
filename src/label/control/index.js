import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            block: 'label',
            elem: 'control'
        },
        props.children
    );
}
