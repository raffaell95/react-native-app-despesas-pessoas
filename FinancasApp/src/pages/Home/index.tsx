import { Background, ListBalance, Area, Title, List } from './styles'
import Header from "../../components/Header";
import { useEffect, useState } from 'react';

import { format } from 'date-fns'
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import { Modal, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import HistoricoList from '../../components/HistoricoList';
import CalendarModel from '../../components/CalendarModal';

export default function Home(){
    const isFocused = useIsFocused()
    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const [moviments, setMoviments] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        let isActive = true

        async function getMovements(){
            let date = new Date(dateMovements)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000
            let dateFormated = format(onlyDate, 'dd/MM/yyyy')

            const receives = await api.get('receives', {
                params: {
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            if(isActive){
                setMoviments(receives.data)
                setListBalance(balance.data)
            }
        }
        getMovements()

        return () => isActive = false
    }, [isFocused, dateMovements])

    async function handleDelete(id: string){
        try {
            await api.delete('receives/delete', {
                params: {
                    item_id: id
                }
            })
            setDateMovements(new Date())
        } catch (error) {
            console.log(error)
        }
    }

    function filterDateMovements(dateSelected: any){
        setDateMovements(dateSelected)
    }

    return (
        <Background>
            <Header title="Minhas movimentações"/>
            <ListBalance 
                data={listBalance} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({item}) => (<BalanceItem data={item} />)}
            />

            <Area>
                <TouchableOpacity onPress={()=> setModalVisible(true)}>
                    <Icon name="event" color="#121212" size={30}/>
                </TouchableOpacity>
                <Title>Ultimas movimentações</Title>
            </Area>

            <List 
                data={moviments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (<HistoricoList data={item} deleteItem={handleDelete} />)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <CalendarModel 
                    setVisibie={() => setModalVisible(false)}
                    handleFilter={filterDateMovements}
                />
            </Modal>

        </Background>
    )
}