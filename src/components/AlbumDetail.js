import React from 'react';
import {View, Text, Image, Linking } from 'react-native';
import Card from './Card' ;
import CardSection from './CardSection' ;
import Button from './Button';

const AlbumDetail = (props) => {
    const {album} = props;

    return (
            <Card>
                <CardSection>
                    <View>
                        <Image
                            style={styles.thumbnailImageStyle} 
                            source={{uri: album.thumbnail_image}} 
                        />
                    </View>
                    <View style={styles.headerContentStyles}>
                        <Text style={styles.titleStyle}>{album.title} </Text>
                        <Text>{album.artist} </Text>
                    </View>
                </CardSection>

                <CardSection>
                    <View>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: album.image}} 
                        />
                    </View>
                </CardSection>
                
                <CardSection>
                    <Button onPress={() => Linking.openURL(album.url)}>
                        Buy now!                    
                    </Button>
                </CardSection>
            </Card>
    )
}

const styles = {
    headerContentStyles: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    thumbnailImageStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        width: 400
    },
    titleStyle: {
        fontWeight: '900',
        fontStyle: 'italic'
    }

}

export default AlbumDetail;