import React, { useState } from 'react';
import { AlertCircle, Plus, Search } from 'lucide-react';

// Function to find all pairs of numbers that sum up to target
function findAllTwoSums(numbers: number[], target: number): [number, number][] {
  const results: [number, number][] = [];
  const seen = new Set<string>();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        // Create a unique key for this pair to avoid duplicates
        const pairKey = `${Math.min(numbers[i], numbers[j])},${Math.max(numbers[i], numbers[j])}`;
        if (!seen.has(pairKey)) {
          results.push([numbers[i], numbers[j]]);
          seen.add(pairKey);
        }
      }
    }
  }
  
  return results;
}

function App() {
  const [numbers, setNumbers] = useState<string>('2, 7, 11, 15, 2, 7');
  const [target, setTarget] = useState<number>(9);
  const [results, setResults] = useState<[number, number][]>([]);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    try {
      const numberArray = numbers.split(',')
        .map(num => {
          const parsed = parseInt(num.trim());
          if (isNaN(parsed)) throw new Error('Invalid number in input');
          return parsed;
        });
      
      if (numberArray.length < 2) {
        setError('Please enter at least two numbers');
        setResults([]);
        return;
      }

      const foundPairs = findAllTwoSums(numberArray, target);
      
      if (foundPairs.length === 0) {
        setError('No pairs found that sum up to the target');
        setResults([]);
      } else {
        setError('');
        setResults(foundPairs);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid input');
      setResults([]);
    }
  };

  return (
    <div className="min-h-screen  bg-[#0F172A] flex items-center justify-center p-4">
      <div className="bg-[#1E293B] rounded w-full max-w-2xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-500 p-2 rounded">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">
            Two Sum Finder
          </h1>
        </div>
        
        <div className="grid rounded md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-blue-400 mb-2">
                Numbers (comma-separated)
              </label>
              <input
                type="text"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
                className="w-full px-4 py-3 bg-[#334155] rounded text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 border-0"
                placeholder="Enter numbers separated by commas"
              />
            </div>
            
            <div className="rounded">
              <label className="block text-sm font-medium text-blue-400 mb-2">
                Target Sum
              </label>
              <input
                type="number"
                value={target}
                onChange={(e) => setTarget(parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-[#334155] rounded text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 border-0"
              />
            </div>
            
            <button
              onClick={handleCalculate}
              className="w-full rounded bg-blue-500 rounded text-white py-3 px-6 flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
            >
              <Search className="w-5 h-5" />
              Find Numbers
            </button>
            
            {error && (
              <div className="p-4 rounded bg-red-500/10 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-400 text-sm">
                  {error}
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-[#334155] p-6 rounded">
            {results.length > 0 ? (
              <div className="space-y-4 rounded">
                <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                  <h2 className="text-xl font-semibold rounded text-white">Results</h2>
                  <span className="text-blue-400 rounded text-sm">
                    {results.length} pairs found
                  </span>
                </div>
                <div className="space-y-3">
                  {results.map((pair, index) => (
                    <div
                      key={index}
                      className="bg-[#1E293B] rounded p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/10 rounded px-3 py-1">
                          <span className="text-blue-400 font-mono">
                            [{pair[0]}, {pair[1]}]
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span>{pair[0]}</span>
                        <Plus className="w-4 h-4" />
                        <span>{pair[1]}</span>
                        <span>=</span>
                        <span className="text-blue-400">{target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full rounded flex items-center justify-center text-gray-500">
                {!error && (
                  <p className="text-center">
                    Enter numbers and target sum<br />to find matching pairs
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;