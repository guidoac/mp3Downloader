import { ScrollViewContainer } from './Styles';
import React from 'react';
import DropDownVideo from './dropdownVideo';
import ItemLista from './itemLista'

export default class ScrollView extends React.Component {
    render() {
        console.log(this.props.listaVideos)
        return (
            <ScrollViewContainer
                ListHeaderComponent={<DropDownVideo/>}
                data={this.props.listaVideos}
                renderItem={({ item }) => <ItemLista key={item.id} linkThumb={item.urlthumb} videoTitle={item.name} linkVideo={item.url} />}
                keyExtractor={(item, index) => item.id}
            />
        )
    }
}