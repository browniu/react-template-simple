import React, {Component} from 'react';
import styles from './styles.module.scss'
import cn from 'classnames'

export default class Main extends Component {
    render() {
        return (
            <div className={cn(styles.root, 'browniu-app-root')}>
                hello browniu!
            </div>
        );
    }
}
