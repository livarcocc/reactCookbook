import * as React from 'react';
import { Cookbooks } from './Cookbooks';
import { RecipesNavMenu } from './RecipesNavMenu';

export interface LayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='main-nav'>
                    <Cookbooks />
                    <RecipesNavMenu />
                        </div>
                </div>
                <div className='col-sm-9'>
                    { this.props.body }
                </div>
            </div>
        </div>;
    }
}
