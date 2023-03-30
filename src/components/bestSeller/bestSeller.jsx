import './section.module.css';
import { Card } from '../card/card';

export const BestSeller = () => {
    return (
        <div className='root'>
            <div className={styles.section}>
                <div className='section-title'>
                    <h1 className='section-title-txt'>BEST SELLER</h1>
                </div>
                <div className='section-cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
