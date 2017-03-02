import * as React from 'react';
import { Link } from 'react-router';

export class RecipesNavMenu extends React.Component<any, void> {
    public render() {
        return <div className='navbar navbar-inverse'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to={ '/' }>Recipes</Link>
                    </div>
                    <div className='clearfix'></div>
                    <div className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav'>
                            <li>
                                <Link to={ '/' } activeClassName='active'>
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>;
    }
}
