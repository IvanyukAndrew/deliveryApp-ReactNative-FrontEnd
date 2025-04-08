import { FC } from 'react';
import { Text, View } from 'react-native';
import { useCart } from '../../../hooks/useCart';
import Layout from '../../ui/layout/Layout';
import Heading from '../../ui/Heading';
import { convertPrice } from '../../../utils/convertPrice';
import Button from '../../ui/button/Button';
import CartItem from './cart-item/CartItem';

const Cart: FC = () => {
  const { items, total } = useCart();
  return (
    <>
      <Layout>
        <Heading>Cart</Heading>

        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <Text className="text-center">Cart is empty</Text>
        )}
      </Layout>

      {items.length ? (
        <View className="bottom-8 absolute w-[90%] mx-5">
          <Text className="font-bold text-xl">Total: {convertPrice(total)}</Text>
          <Button onPress={() => {}}>Place order</Button>
        </View>
      ) : null}
    </>
  );
};

export default Cart;
