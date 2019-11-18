@RestController
@SessionAttributes(GeneralConstants.ID_SESSION_SHOPPING_CART)
public class CartController {

  private List<Product> products = new ArrayList<Product>();

  private Pusher pusher;

  @PostConstruct
  public void configure() {
    pusher = new Pusher(
      PusherConstants.PUSHER_APP_ID, 
      PusherConstants.PUSHER_APP_KEY, 
      PusherConstants.PUSHER_APP_SECRET
    );

    Product product = new Product();
    product.setId(1L);
    product.setName("Office Chair");
    product.setPrice(new BigDecimal("55.99"));
    products.add(product);

    product = new Product();
    product.setId(2L);
    product.setName("Sunglasses");
    product.setPrice(new BigDecimal("99.99"));
    products.add(product);

    product = new Product();
    product.setId(3L);
    product.setName("Wireless Headphones");
    product.setPrice(new BigDecimal("349.01"));
    products.add(product);

    product = new Product();
    product.setId(4L);
    product.setName("External Hard Drive");
    product.setPrice(new BigDecimal("89.99"));
    products.add(product);
  }

  
}