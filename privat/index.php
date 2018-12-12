<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
date_default_timezone_set('Europe/London'); 

class Card
{
    /** @var string */
    protected $account;
    /** @var string */
    protected $currency;
    /** @var string */
    protected $cardNumber;
    public static function fromResponse(\SimpleXMLElement $card)
    {
        return (new self)
            ->setAccount((string)$card->account)
            ->setCurrency((string)$card->currency)
            ->setCardNumber((string)$card->card_number)
            ;
    }
    /**
     * @param string $account
     *
     * @return $this
     */
    public function setAccount($account)
    {
        $this->account = $account;
        return $this;
    }
    /**
     * @return string
     */
    public function getAccount()
    {
        return $this->account;
    }
    /**
     * @param string $currency
     *
     * @return $this
     */
    public function setCurrency($currency)
    {
        $this->currency = $currency;
        return $this;
    }
    /**
     * @return string
     */
    public function getCurrency()
    {
        return $this->currency;
    }
    /**
     * @param string $cardNumber
     *
     * @return $this
     */
    public function setCardNumber($cardNumber)
    {
        $this->cardNumber = $cardNumber;
        return $this;
    }
    /**
     * @return \DateTime
     */
    public function getCardNumber()
    {
        return $this->cardNumber;
    }
}

class Balance
{
    /** @var Card */
    protected $card;
    /** @var float */
    protected $balance;
    /** @var \DateTime */
    protected $balanceDate;
    public static function fromResponse(\SimpleXMLElement $cardBalance)
    {
        return (new self)
            ->setCard(Card::fromResponse($cardBalance->card))
            ->setBalance(floatval((string)$cardBalance->balance))
            ->setBalanceDate(new \DateTime(
                $cardBalance->balanceDate,
                new \DateTimeZone('Europe/Kiev')
            ))
        ;
    }
    /**
     * @param Card $card
     *
     * @return $this
     */
    public function setCard($card)
    {
        $this->card = $card;
        return $this;
    }
    /**
     * @return Card
     */
    public function getCard()
    {
        return $this->card;
    }
    /**
     * @param float $balance
     *
     * @return $this
     */
    public function setBalance($balance)
    {
        $this->balance = $balance;
        return $this;
    }
    /**
     * @return float
     */
    public function getBalance()
    {
        return $this->balance;
    }
    /**
     * @param \DateTime $balanceDate
     *
     * @return $this
     */
    public function setBalanceDate(\DateTime $balanceDate)
    {
        $this->balanceDate = $balanceDate;
        return $this;
    }
    /**
     * @return \DateTime
     */
    public function getBalanceDate()
    {
        return $this->balanceDate;
    }
}

class Statements
{
    /** @var string */
    protected $status;

    /** @var float */
    protected $credit;

    /** @var float */
    protected $debet;

    /** @var Statement[] */
    protected $statements = [];

    public static function fromResponse(\SimpleXMLElement $statements)
    {
        return (new self)
            ->setStatus((string)$statements['status'])
            ->setCredit(floatval((string)$statements['credit']))
            ->setDebet(floatval((string)$statements['debet']))
            ->setStatements(Statement::arrayFromResponse($statements))
        ;
    }

    /**
     * @param string $status
     *
     * @return $this
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param float $debet
     *
     * @return $this
     */
    public function setDebet($debet)
    {
        $this->debet = $debet;

        return $this;
    }

    /**
     * @return float
     */
    public function getDebet()
    {
        return $this->debet;
    }

    /**
     * @param float $credit
     *
     * @return $this
     */
    public function setCredit($credit)
    {
        $this->credit = $credit;

        return $this;
    }

    /**
     * @return float
     */
    public function getCredit()
    {
        return $this->credit;
    }

    /**
     * @param Statement[] $statements
     *
     * @return $this
     */
    public function setStatements($statements)
    {
        $this->statements = $statements;

        return $this;
    }

    /**
     * @return Statement[]
     */
    public function getStatements()
    {
        return $this->statements;
    }
}

class Statement
{
    /** @var string */
    protected $cardNumber;

    /** @var \DateTime */
    protected $transactionDate;

    /** @var string */
    protected $transactionCode;

    /** @var float */
    protected $sourceAmount;

    /** @var float */
    protected $sourceFee;

    /** @var  string */
    protected $sourceCurrency;

    /** @var float */
    protected $exchangeRate;

    /** @var float */
    protected $amount;

    /** @var string */
    protected $currency;

    /** @var float */
    protected $balance;

    /** @var string */
    protected $description;

    /**
     * @param \SimpleXMLElement $statements
     * @return $this[]
     */
    public static function arrayFromResponse(\SimpleXMLElement $statements)
    {
        $result = [];
        foreach ($statements->statement as $statement) {
            $result[] = self::fromResponse($statement);
        }
        return $result;
    }

    /**
     * @param \SimpleXMLElement $statement
     * @return $this
     * @throws PrivatbankResponseParsingException
     */
    public static function fromResponse(\SimpleXMLElement $statement)
    {
        list($sourceAmount, $sourceCurrency) = explode(' ', (string)$statement['amount']);
        list($amount, $currency) = explode(' ', (string)$statement['cardamount']);
        list($balance,) = explode(' ', (string)$statement['rest']);
        $transactionDate = \DateTime::createFromFormat(
            'Y-m-d H:i:s',
            sprintf('%s %s', (string)$statement['trandate'], (string)$statement['trantime']),
            new \DateTimeZone('Europe/Kiev')
        );

        if (false === $transactionDate) {
            throw new PrivatbankResponseParsingException("Error occured during parsing transaction date from Privatbank API endpoint response");
        }

        return (new self)
            ->setCardNumber((string)$statement['card'])
            ->setTransactionDate($transactionDate)
            ->setTransactionCode((string)$statement['appcode'])
            ->setAmount(floatval($amount))
            ->setBalance(floatval($balance))
            ->setCurrency($currency)
            ->setSourceAmount(floatval($sourceAmount))
            ->setSourceCurrency($sourceCurrency)
            ->setDescription((string)$statement['terminal'])
            ->setExchangeRate($currency != $sourceCurrency ? abs(floatval($amount)/floatval($sourceAmount)) : null)
            ->setSourceFee($currency == $sourceCurrency ? abs(abs(floatval($amount)) - abs(floatval($sourceAmount))) : null)
        ;
    }

    /**
     * @param string $cardNumber
     *
     * @return $this
     */
    public function setCardNumber($cardNumber)
    {
        $this->cardNumber = $cardNumber;

        return $this;
    }

    /**
     * @return string
     */
    public function getCardNumber()
    {
        return $this->cardNumber;
    }

    /**
     * @param \DateTime $transactionDate
     *
     * @return $this
     */
    public function setTransactionDate(\DateTime $transactionDate)
    {
        $this->transactionDate = $transactionDate;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getTransactionDate()
    {
        return $this->transactionDate;
    }

    /**
     * @param string $transactionCode
     *
     * @return $this
     */
    public function setTransactionCode($transactionCode)
    {
        $this->transactionCode = $transactionCode;

        return $this;
    }

    /**
     * @return string
     */
    public function getTransactionCode()
    {
        return $this->transactionCode;
    }

    /**
     * @param float $sourceAmount
     *
     * @return $this
     */
    public function setSourceAmount($sourceAmount)
    {
        $this->sourceAmount = $sourceAmount;

        return $this;
    }

    /**
     * @return float
     */
    public function getSourceAmount()
    {
        return $this->sourceAmount;
    }

    /**
     * @param float $sourceFee
     *
     * @return $this
     */
    public function setSourceFee($sourceFee)
    {
        $this->sourceFee = $sourceFee;

        return $this;
    }

    /**
     * @return float
     */
    public function getSourceFee()
    {
        return $this->sourceFee;
    }

    /**
     * @param string $sourceCurrency
     *
     * @return $this
     */
    public function setSourceCurrency($sourceCurrency)
    {
        $this->sourceCurrency = $sourceCurrency;

        return $this;
    }

    /**
     * @return string
     */
    public function getSourceCurrency()
    {
        return $this->sourceCurrency;
    }

    /**
     * @param float $exchangeRate
     *
     * @return $this
     */
    public function setExchangeRate($exchangeRate)
    {
        $this->exchangeRate = $exchangeRate;

        return $this;
    }

    /**
     * @return float
     */
    public function getExchangeRate()
    {
        return $this->exchangeRate;
    }

    /**
     * @param float $amount
     *
     * @return $this
     */
    public function setAmount($amount)
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * @return float
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * @return string
     */
    public function getSignedAmount()
    {
        return $this->amount > 0 ? sprintf('+%s', $this->amount) : $this->amount;
    }

    /**
     * @param float $balance
     *
     * @return $this
     */
    public function setBalance($balance)
    {
        $this->balance = $balance;

        return $this;
    }

    /**
     * @return float
     */
    public function getBalance()
    {
        return $this->balance;
    }

    /**
     * @param string $currency
     *
     * @return $this
     */
    public function setCurrency($currency)
    {
        $this->currency = $currency;

        return $this;
    }

    /**
     * @return string
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * @param string $description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }
}
class Merchant
{
    const API_URL = 'https://api.privatbank.ua/p24api';

    /** @var resource */
    protected $curl;

    /** @var string */
    protected $merchantId;

    /** @var string */
    protected $merchantSecret;

    /** @var string */
    protected $cardNumber;

    /**
     * @param string $merchantId
     * @param string $merchantSecret
     */
    public function __construct($merchantId, $merchantSecret, $cardNumber)
    {
        $this->curl = curl_init();
        $this->merchantId = $merchantId;
        $this->merchantSecret = $merchantSecret;
        $this->cardNumber = $cardNumber;
    }

    public function getCardNumber()
    {
        return $this->cardNumber;
    }

    /**
     * Close curl
     */
    public function __destruct()
    {
        $this->curl && curl_close($this->curl);
    }

    /**
     * @see https://api.privatbank.ua/#p24/balance
     *
     * @return Balance
     */
    public function getBalance()
    {
        $request = new \SimpleXMLElement("<?xml version=\"1.0\" encoding=\"UTF-8\" ?><request version=\"1.0\"></request>");

        # Data
        $data = $request->addChild('data');
        $data->addChild('oper', 'cmt');
        $data->addChild('wait', '0');
        $data->addChild('test', '0');

        # Data > Payment
        $payment = $data->addChild('payment');
        $payment->addAttribute('id', '');

        # Data > Payment > Cardnum
        $cardnum = $payment->addChild('prop');
        $cardnum->addAttribute('name', 'cardnum');
        $cardnum->addAttribute('value', $this->cleanupCardNumber($this->cardNumber));

        # Data > Payment > Country
        $country = $payment->addChild('prop');
        $country->addAttribute('name', 'country');
        $country->addAttribute('value', 'UA');

        # Merchant
        $merchant = $request->addChild('merchant');
        $merchant->addChild('id', $this->merchantId);
        $merchant->addChild('signature', $this->buildSignature($this->innerXML($data)));

        $response = $this->call('balance', $request->asXML());
        return Balance::fromResponse(
            $response->data->info->cardbalance
        );
    }

    /**
     * @see https://api.privatbank.ua/#p24/orders
     *
     * @return Statements
     */
    public function getHistory($sinceDate, $toDate = null)
    {
        if (null === $toDate) {
            // $toDate = new \DateTime();
        }

        $request = new \SimpleXMLElement("<?xml version=\"1.0\" encoding=\"UTF-8\" ?><request version=\"1.0\"></request>");

        # Data
        $data = $request->addChild('data');
        $data->addChild('oper', 'cmt');
        $data->addChild('wait', '0');
        $data->addChild('test', '0');

        # Data > Payment
        $payment = $data->addChild('payment');
        $payment->addAttribute('id', '');

        # Data > Payment > Cardnum
        $cardnum = $payment->addChild('prop');
        $cardnum->addAttribute('name', 'cardnum');
        $cardnum->addAttribute('value', $this->cleanupCardNumber($this->cardNumber));

        # Data > Payment > Start Date
        $country = $payment->addChild('prop');
        $country->addAttribute('name', 'sd');
        $country->addAttribute('value', date("d.m.Y", strtotime("-2 month")));

        # Data > Payment > End Date
        $country = $payment->addChild('prop');
        $country->addAttribute('name', 'ed');
        $country->addAttribute('value', date("d.m.Y"));

        # Merchant
        $merchant = $request->addChild('merchant');
        $merchant->addChild('id', $this->merchantId);
        $merchant->addChild('signature', $this->buildSignature($this->innerXML($data)));

        $response = $this->call('rest_fiz', $request->asXML());

        return Statements::fromResponse(
            $response->data->info->statements
        );
    }

    /**
     * @param string $cardNumber
     * @return string
     */
    protected function cleanupCardNumber($cardNumber)
    {
        return preg_replace('/[^0-9]/', '', $cardNumber);
    }

    /**
     * @param string $data
     * @return string
     */
    protected function buildSignature($data)
    {
        return sha1(md5(sprintf(
            '%s%s',
            $data,
                $this->merchantSecret
        )));
    }

    /**
     * @param \SimpleXMLElement $node
     * @return string
     */
    protected function innerXML(\SimpleXMLElement $node)
    {
        $content = "";
        foreach($node->children() as $child) {
            $content .= $child->asXML();
        }
        return $content;
    }

    /**
     * Call method
     *
     * @param string $method
     * @param string|null $data
     * @return \SimpleXMLElement
     */
    protected function call($method = '', $data = null)
    {
        $options = [
            CURLOPT_URL => sprintf('%s/%s', self::API_URL, $method),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => null,
            CURLOPT_POSTFIELDS => null,
        ];

        if ($data) {
            $options[CURLOPT_POST] = true;
            $options[CURLOPT_POSTFIELDS] = $data;
        }

        $response = new \SimpleXMLElement($this->executeCurl($options));

        if (isset($response->data->error)) {
            throw new PrivatbankException((string)$response->data->error['message']);
        }

        // Fuck, Privatbank, you kidding me?
        if (isset($response->data->info->error)) {
            throw new PrivatbankException((string)$response->data->info->error);
        }

        return $response;
    }

    /**
     * @param array $options
     * @return string
     */
    protected function executeCurl(array $options)
    {
        curl_setopt_array($this->curl, $options);

        $result = curl_exec($this->curl);
        if ($result === false) {
            throw new PrivatbankException(curl_error($this->curl), curl_errno($this->curl));
        }

        $httpCode = curl_getinfo($this->curl, CURLINFO_HTTP_CODE);
        if (!in_array($httpCode, array(200))) {
            throw new PrivatbankException(sprintf('Server returned HTTP code %s', $httpCode), $httpCode);
        }
        return $result;
    }
}


$param[0] = array(
    'id' => '140853',
    'key' => 'DrzrT2uKYXJxC4DB7m0f8wy6D7Qoodes', 
    'cart' => '5168742201170739', 
);
$param[1] = array(
    'id' => '140786',
    'key' => '0o5ZDPKADA3QwYaq6P566EvkbG15lxX5', 
    'cart' => '4149625814352231', 
);
$param[2] = array(
    'id' => '140787',
    'key' => 'i06jV5e4I0Y87E5peG8P06TK8Dbl0Je7', 
    'cart' => '4149625814352256', 
);



$merchant = new Merchant($param[$_GET['id']]['id'],$param[$_GET['id']]['key'],$param[$_GET['id']]['cart']);
// $balance = $merchant->getBalance();
// echo sprintf(
//     '%s: Balance at card %s is %s %s',
//     $balance->getBalanceDate()->format('Y-m-d H:i:s'),
//     $balance->getCard()->getCardNumber(),
//     $balance->getBalance(),
//     $balance->getCard()->getCurrency()
// );

$history = $merchant->getHistory('01-12-2018', gmdate('d-m-Y'));



$i = 0;
foreach ($history->getStatements() as $statement){

    $date = (array)$statement->getTransactionDate();

    preg_match('/(.*):(.*).000000/', $date['date'], $arr);
    $title = $arr[1];
    
    $result[$i]['data'] = $title;
    $result[$i]['time'] = $statement->getCurrency();
    $result[$i]['sum'] = $statement->getSignedAmount();
    $result[$i]['CCY'] = $statement->getCurrency();
    $result[$i]['desc'] = $statement->getDescription();

    $i++;
}

echo json_encode($result);
// print_r($result);




?>

