import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';
import {StyleSheet} from 'react-native';

export default class BadgeExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content style={styles.content}>
                    <Badge>
                        <Text onPress={() => console.log("test")}>0 - 2</Text>
                    </Badge>
                    <Badge primary>
                        <Text>3 - 5</Text>
                    </Badge>
                    <Badge success>
                        <Text>5 - 8</Text>
                    </Badge>
                    <Badge info>
                        <Text>9 - 12</Text>
                    </Badge>
                    <Badge warning>
                        <Text>12 - 15</Text>
                    </Badge>
                    <Badge danger>
                        <Text>15+</Text>
                    </Badge>
                    <Badge primary>
                        <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }} />
                    </Badge>
                    <Badge style={{ backgroundColor: 'black' }}>
                        <Text style={{ color: 'white' }}>1866</Text>
                    </Badge>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'column'
    }
})