import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct,setPct]  = useState(10)

  const calcular = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip((pct / 100) * nBill);
    } else {
      alert('Digite o valor da conta');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Calculadora Gorjeta</Text>
      <View style={styles.areaInput}>
        <TextInput
          placeholderTextColor="purple"
          keyboardType="numeric"
          //  value={bill}
          onChangeText={n => setBill(n)}
          style={styles.textInput}
          placeholder="Digite o total da conta"
        />

        <View style={styles.areaPct}>
          <TouchableOpacity onPress={()=>setPct(5)} style={styles.pctBtn}>
            <Text style={styles.pct}>5%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setPct(10)}  style={styles.pctBtn}>
            <Text style={styles.pct}>10%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setPct(15)}  style={styles.pctBtn}>
            <Text style={styles.pct}>15%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setPct(20)}  style={styles.pctBtn}>
            <Text style={styles.pct}>20%</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={calcular}>
          <Text style={styles.btnText}>{`Calcular ${pct}%`} </Text>
        </TouchableOpacity>
      </View>

      {tip > 0 && (
        <View style={styles.ResultArea}>
          <Text style={styles.ResultItemTitle}>Valor da conta</Text>
          <Text style={styles.ResultItem}>
            R$: {parseFloat(bill).toFixed(2)}
          </Text>

          <Text style={styles.ResultItemTitle}>Valor da gorjeta: </Text>
          <Text style={styles.ResultItem}>R$: {tip.toFixed(2)}</Text>

          <Text style={styles.ResultItemTitle}>Valor total: </Text>
          <Text style={styles.ResultItem}>
            R$: {(parseFloat(bill) + tip).toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    marginTop: 30,
  },
  areaInput: {
    alignContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 45,
    width: '95%',
    borderRadius: 6,
    backgroundColor: '#eee',
    borderWidth: 1,
    marginTop: 20,
  },
  btn: {
    height: 45,
    width: '95%',
    // borderWidth: 1,
    backgroundColor: 'orange',
    // borderColor: 'white',
    borderRadius: 6,
    marginTop: 20,
    justifyContent: 'center',
  },

  pct: {
    color: 'purple',
    fontSize: 17,
    fontWeight: '500',
  },

  areaPct: {
    marginTop: 20,
    flexDirection: 'row',
  },
  pctBtn: {
    width: 82,
    backgroundColor: '#ddd',
    margin: 10,
    padding: 6,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  ResultItem: {
    fontSize: 15,
    color: 'purple',
    marginBottom: 26,
  },
  ResultItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  ResultArea: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 15,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default App;
